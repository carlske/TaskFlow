import { useEffect } from 'react';

type SEOProps = {
    title?: string;
    description?: string;
    keywords?: string;
};

export const SEO = ({ title, description, keywords }: SEOProps) => {
    useEffect(() => {
        if (title) {
            document.title = title;
        }

        if (description) {
            updateMeta('description', description);
        }

        if (keywords) {
            updateMeta('keywords', keywords);
        }
    }, [title, description, keywords]);

    const updateMeta = (name: string, content: string) => {
        let element = document.querySelector(`meta[name="${name}"]`);
        if (!element) {
            element = document.createElement('meta');
            element.setAttribute('name', name);
            document.head.appendChild(element);
        }
        element.setAttribute('content', content);
    };

    return null;
};
