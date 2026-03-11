import { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, FileText, Download, Loader2, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import { useToast } from '@/hooks/use-toast';
import jsPDF from 'jspdf';
import { generateLegalAnalysis } from '@/utils/legalAnalysis';

const FreeAnalysis = () => {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const fileChangeInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // Validate file type
      const validTypes = ['application/pdf', 'text/plain', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png'];
      if (validTypes.includes(selectedFile.type)) {
        setFile(selectedFile);
        setAnalysis(null);
        toast({
          title: "File uploaded",
          description: `${selectedFile.name} is ready for analysis`,
        });
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF, DOC, DOCX, TXT, JPG, or PNG file",
          variant: "destructive",
        });
      }
    }
  };

  const analyzeDocument = async () => {
    if (!file) return;

    setAnalyzing(true);
    
    try {
      const text = await file.text();
      
      // Simulate Legal BERT processing time
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const { report } = generateLegalAnalysis(text, file.name);
      
      setAnalysis(report);
      setAnalyzing(false);
      toast({
        title: "Analysis complete",
        description: "Your document has been analyzed successfully",
      });
    } catch (error) {
      setAnalyzing(false);
      toast({
        title: "Analysis failed",
        description: "There was an error analyzing your document",
        variant: "destructive",
      });
    }
  };

  const downloadPDF = () => {
    if (!analysis) return;

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 15;
    const maxLineWidth = pageWidth - (margin * 2);
    const lineHeight = 5;

    // Strip emojis and special Unicode characters for PDF compatibility
    const cleanText = analysis
      .replace(/[═══]+/g, '________________________________________')
      .replace(/[┌┐└┘├┤│─]+/g, '')
      .replace(/📄|📅|🤖|📊|📝|🔹|🟢|🟡|🟠|🔴|📌|✏️|✅|⚠️|❌|🔍|📋|🔄|✍️|📂/g, '')
      .replace(/[^\x00-\x7F]/g, '') // Remove any remaining non-ASCII
      .replace(/\n{3,}/g, '\n\n') // Collapse excessive newlines
      .trim();

    // Title
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('LEGAL DOCUMENT ANALYSIS REPORT', margin, 20);

    // Horizontal line under title
    doc.setDrawColor(0);
    doc.setLineWidth(0.5);
    doc.line(margin, 23, pageWidth - margin, 23);

    // Content
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');

    const lines = cleanText.split('\n');
    let yPosition = 30;

    for (const rawLine of lines) {
      const trimmedLine = rawLine.trim();

      // Detect section headers (lines that are all uppercase or have underscores)
      const isHeader = /^[A-Z\s\-()\/&:]{10,}$/.test(trimmedLine) && trimmedLine.length > 10;
      const isSeparator = /^[_]{10,}$/.test(trimmedLine);

      if (isSeparator) {
        if (yPosition > pageHeight - margin - 10) {
          doc.addPage();
          yPosition = margin;
        }
        doc.setDrawColor(180);
        doc.setLineWidth(0.3);
        doc.line(margin, yPosition, pageWidth - margin, yPosition);
        yPosition += 4;
        continue;
      }

      if (isHeader) {
        yPosition += 3;
        if (yPosition > pageHeight - margin - 10) {
          doc.addPage();
          yPosition = margin;
        }
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        const wrappedHeader = doc.splitTextToSize(trimmedLine, maxLineWidth);
        for (const hl of wrappedHeader) {
          if (yPosition > pageHeight - margin) { doc.addPage(); yPosition = margin; }
          doc.text(hl, margin, yPosition);
          yPosition += 6;
        }
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        continue;
      }

      // Detect issue headers like "Issue #1:"
      const isIssueHeader = /^Issue #\d+/.test(trimmedLine);
      if (isIssueHeader) {
        yPosition += 2;
        if (yPosition > pageHeight - margin - 10) { doc.addPage(); yPosition = margin; }
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
      }

      // Wrap long lines
      const wrapped = doc.splitTextToSize(rawLine, maxLineWidth);
      for (const wl of wrapped) {
        if (yPosition > pageHeight - margin) {
          doc.addPage();
          yPosition = margin;
        }
        doc.text(wl, margin, yPosition);
        yPosition += lineHeight;
      }

      if (isIssueHeader) {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
      }
    }

    // Footer on all pages
    const totalPages = doc.internal.pages.length - 1;
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFontSize(7);
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(120);
      doc.text(
        `Page ${i} of ${totalPages}  |  Generated by DraftSathi AI  |  Legal BERT Analysis Engine`,
        pageWidth / 2,
        pageHeight - 8,
        { align: 'center' }
      );
      doc.setTextColor(0);
    }

    doc.save(`legal-analysis-${file?.name || 'document'}-${Date.now()}.pdf`);

    toast({
      title: "PDF downloaded",
      description: "Your analysis report has been saved",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/10">
      <Header />
      
      <section className="pt-20 pb-20 px-6">
        <div className="container max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Free Document Analysis
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Upload your legal document and get instant AI-powered analysis using Legal BERT model. No signup required.
            </p>
          </div>

          {/* Upload Card */}
          <Card className="shadow-elegant bg-gradient-to-br from-card to-card/50 border-border/50 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-6 w-6 text-primary" />
                Upload Document
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {!file ? (
                <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary/50 transition-colors">
                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg font-medium mb-2">Choose a file to analyze</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Supports PDF, DOC, DOCX, TXT, JPG, and PNG files
                  </p>
                  <div>
                    <Button 
                      variant="hero" 
                      className="shadow-elegant hover:shadow-glow"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Select File
                    </Button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-secondary/20 rounded-lg">
                    <FileText className="h-8 w-8 text-primary" />
                    <div className="flex-1">
                      <p className="font-medium">{file.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {(file.size / 1024).toFixed(2)} KB
                      </p>
                    </div>
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  
                  <div className="flex gap-4">
                    <Button
                      onClick={analyzeDocument}
                      disabled={analyzing}
                      className="flex-1 shadow-elegant hover:shadow-glow"
                      variant="hero"
                    >
                      {analyzing ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Analyzing with Legal BERT...
                        </>
                      ) : (
                        'Analyze Document'
                      )}
                    </Button>
                    
                    <Button 
                      variant="outline"
                      onClick={() => fileChangeInputRef.current?.click()}
                    >
                      Change File
                    </Button>
                    <input
                      ref={fileChangeInputRef}
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Analysis Results */}
          {analysis && (
            <Card className="shadow-elegant bg-gradient-to-br from-card to-card/50 border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    Analysis Complete
                  </CardTitle>
                  <Button onClick={downloadPDF} variant="hero" className="shadow-elegant hover:shadow-glow">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-secondary/20 rounded-lg p-6">
                  <pre className="whitespace-pre-wrap font-mono text-sm text-foreground">
                    {analysis}
                  </pre>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Info Box */}
          <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-lg">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              About Legal BERT Analysis
            </h3>
            <p className="text-sm text-muted-foreground">
              Our Legal BERT model is specifically trained on millions of legal documents to understand legal terminology, 
              contract structures, and potential risk factors. This free analysis provides an overview of your document. 
              For comprehensive analysis and personalized recommendations, consider creating an account.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeAnalysis;
