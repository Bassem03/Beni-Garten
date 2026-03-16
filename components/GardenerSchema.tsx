import React from 'react';
import { Helmet } from 'react-helmet';

export const GardenerSchema: React.FC = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Gardener",
        "@id": "https://beni-garten.de/#gardener",
        "name": "Beni Garten und Grünanlagenpflege",
        "description": "Professioneller Garten- und Landschaftsbau in Ulm und Umgebung",
        "founder": {
            "@type": "Person",
            "name": "Beni Garten Team"
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Ulm"
            },
            {
                "@type": "City",
                "name": "Neu-Ulm"
            },
            {
                "@type": "City",
                "name": "Blaustein"
            },
            {
                "@type": "City",
                "name": "Senden"
            }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Garten- und Landschaftsbau Dienstleistungen",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Pflasterarbeiten",
                        "description": "Professionelle Pflasterarbeiten",
                        "provider": {
                            "@id": "https://beni-garten.de/#organization"
                        },
                        "category": "Hardscaping"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Mauer- und Terrassenbau",
                        "description": "Bau von stabilen Mauern und schönen Terrassen",
                        "provider": {
                            "@id": "https://beni-garten.de/#organization"
                        },
                        "category": "Hardscaping"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Gartenpflege",
                        "description": "Regelmäßiges Rasenmähen, Reinigung, Düngen und Pflegearbeiten",
                        "category": "Maintenance"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Baumpflege",
                        "description": "Komplette Baumpflege- und Fällarbeiten",
                        "category": "Landscaping"
                    }
                }
            ]
        },
        "url": "https://beni-garten.de/",
        "telephone": "+491748023038",
        "email": "beni-garten@gmail.com",
        "priceRange": "$$",
        "paymentAccepted": "Bar, Überweisung",
        "currenciesAccepted": "EUR"
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default GardenerSchema;
