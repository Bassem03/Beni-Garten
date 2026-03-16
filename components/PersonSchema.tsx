import React from 'react';
import { Helmet } from 'react-helmet';

interface PersonSchemaProps {
    name?: string;
    jobTitle?: string;
    telephone?: string;
    email?: string;
}

export const PersonSchema: React.FC<PersonSchemaProps> = ({
    name = "Beni Garten Team",
    jobTitle = "Landschaftsgärtner",
    telephone = "+491748023038",
    email = "beni-garten@gmail.com"
}) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": name,
        "jobTitle": jobTitle,
        "worksFor": {
            "@id": "https://beni-garten.de/#organization"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Schlehenbühl",
            "addressLocality": "Ulm",
            "postalCode": "89075",
            "addressRegion": "BW",
            "addressCountry": "DE"
        },
        "telephone": telephone,
        "email": email,
        "sameAs": [
            "https://www.facebook.com/profile.php?id=61579944943986" // TODO: Update to real profile when known
        ],
        "knowsAbout": [
            "Gartenbau",
            "Landschaftsbau",
            "Pflasterarbeiten",
            "Rasenpflege",
            "Baumpflege",
            "Terrassenbau",
            "Gartenpflege"
        ]
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default PersonSchema;
