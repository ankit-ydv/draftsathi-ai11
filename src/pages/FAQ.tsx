import { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, Shield, Zap, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqData = [
    {
      category: "Getting Started",
      icon: <Zap className="h-5 w-5" />,
      items: [
        {
          question: "What is DraftSathi AI?",
          answer: "DraftSathi AI is an advanced legal document assistant that uses artificial intelligence to review, analyze, and provide suggestions for legal documents. It helps lawyers, legal professionals, and businesses streamline their document drafting process."
        },
        {
          question: "How do I get started?",
          answer: "Simply click 'Get Started' in the header, create your account, and you can immediately begin uploading documents for AI-powered analysis. No complex setup required."
        },
        {
          question: "What file formats are supported?",
          answer: "Currently, we support .docx (Microsoft Word) files. We're working on adding support for PDF and other common document formats in future updates."
        }
      ]
    },
    {
      category: "Features & Functionality",
      icon: <FileText className="h-5 w-5" />,
      items: [
        {
          question: "What domains does DraftSathi AI specialize in?",
          answer: "We currently specialize in Healthcare (medical contracts, compliance documents) and Land Registry (property deeds, real estate documentation). You can also request new specialized domains for your specific legal needs."
        },
        {
          question: "How accurate is the AI analysis?",
          answer: "Our AI is trained on extensive legal datasets and provides highly accurate clause analysis and risk flagging. However, we always recommend professional legal review for critical documents."
        },
        {
          question: "Can I request lawyer review for complex cases?",
          answer: "Yes! After AI processing, you can request professional lawyer review for complex cases that require human expertise and judgment."
        }
      ]
    },
    {
      category: "Security & Privacy",
      icon: <Shield className="h-5 w-5" />,
      items: [
        {
          question: "How secure is my document data?",
          answer: "We use enterprise-grade security with end-to-end encryption. Your documents are processed securely and never stored permanently on our servers without your explicit consent."
        },
        {
          question: "Who has access to my uploaded documents?",
          answer: "Only you have access to your documents. Our AI processes them automatically, and human review only occurs if you explicitly request lawyer consultation."
        },
        {
          question: "Is my data shared with third parties?",
          answer: "No, we never share your document content with third parties. Your privacy and confidentiality are our top priorities."
        }
      ]
    },
    {
      category: "Pricing & Support",
      icon: <MessageCircle className="h-5 w-5" />,
      items: [
        {
          question: "What are the pricing plans?",
          answer: "We offer flexible pricing plans including a free tier for basic document analysis. Premium plans include advanced features, priority processing, and lawyer consultation options."
        },
        {
          question: "How can I contact support?",
          answer: "You can reach our support team through the contact form on our website, email us directly, or use the live chat feature available in your dashboard."
        },
        {
          question: "Do you offer API access?",
          answer: "Yes, we provide API access for enterprise customers who want to integrate DraftSathi AI into their existing workflows and systems."
        }
      ]
    }
  ];

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const globalIndex = faqData.slice(0, categoryIndex).reduce((acc, cat) => acc + cat.items.length, 0) + itemIndex;
    setOpenItem(openItem === globalIndex ? null : globalIndex);
  };

  let globalItemIndex = 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/10">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full mb-6">
            <MessageCircle className="h-6 w-6 text-primary mr-2" />
            <span className="text-sm font-semibold text-primary">Frequently Asked Questions</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Everything You Need to Know
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about DraftSathi AI's features, security, and how our AI-powered legal document assistance works.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="pb-20 px-6">
        <div className="container max-w-4xl mx-auto">
          <div className="space-y-8">
            {faqData.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="shadow-card bg-gradient-to-br from-card to-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
                      {category.icon}
                    </div>
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => {
                      const currentGlobalIndex = globalItemIndex++;
                      const isOpen = openItem === currentGlobalIndex;
                      
                      return (
                        <div key={itemIndex} className="border border-border/50 rounded-lg overflow-hidden">
                          <button
                            onClick={() => toggleItem(categoryIndex, itemIndex)}
                            className="w-full px-6 py-4 text-left hover:bg-secondary/50 transition-colors flex items-center justify-between"
                          >
                            <span className="font-medium text-foreground pr-4">{item.question}</span>
                            {isOpen ? (
                              <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                            )}
                          </button>
                          
                          {isOpen && (
                            <div className="px-6 pb-4 pt-0 bg-secondary/20">
                              <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Support */}
          <Card className="mt-12 text-center shadow-elegant bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="pt-8">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Our support team is here to help you with any questions about DraftSathi AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:support@draftsathi.ai" 
                  className="inline-flex items-center justify-center px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Email Support
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-medium"
                >
                  Live Chat
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default FAQ;