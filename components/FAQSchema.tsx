import React from 'react';
import { Helmet } from 'react-helmet';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSchemaProps {
    faqs?: FAQItem[];
}

export const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
    const defaultFAQs: FAQItem[] = [
        {
            question: "Was kostet der Gartenbau in Ulm?",
            answer: "Die Kosten für den Landschaftsbau in Ulm variieren je nach den Leistungen. Wir bieten kostenlose Angebote für alle Projekte einschließlich Pflasterarbeiten, Terrassenbau und Gartenpflege an. Rufen Sie uns unter +49 174 8023038 für einen genauen Kostenvoranschlag an."
        },
        {
            question: "Wie lange dauert ein Gartenbauprojekt?",
            answer: "Dies hängt stark von der Wetterlage und den individuellen Anforderungen ab. Kleinere Pflegearbeiten können in wenigen Stunden erledigt werden, während größere Projekte wie Terrassenbau 2-5 Tage in Anspruch nehmen können."
        },
        {
            question: "Bieten Sie kostenlose Kostenvoranschläge an?",
            answer: "Ja! Wir erstellen gerne unverbindliche und kostenfreie Angebote für alle unsere Dienstleistungen in Ulm, Neu-Ulm, Blaustein und der Umgebung. Kontaktieren Sie uns unter +49 174 8023038."
        },
        {
            question: "Welche Leistungen bietet Beni Garten und Grünanlagenpflege an?",
            answer: "Wir bieten umfangreiche Dienstleistungen wie Pflege, Pflasterarbeiten, Rasenbau, Zaunbau, Bepflanzung und Terrassenbau an."
        },
        {
            question: "Sind Sie ein lokales Unternehmen?",
            answer: "Ja, Beni Garten und Grünanlagenpflege ist ein lokales Unternehmen, das den Raum Ulm, Neu-Ulm und die umliegenden Gemeinden fachgerecht bedient."
        }
    ];

    const faqItems = faqs || defaultFAQs;

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default FAQSchema;
