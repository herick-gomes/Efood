const labels: Record<string, string> = {
    Brazilian: 'Brasileira',
    Pizza: 'Pizzaria',
    Italian: 'Italiana',
    Japanese: 'Japonesa',
    Chinese: 'Chinesa',
    Portuguese: 'Portuguesa',
    Mexican: 'Mexicana',
    'Middle Eastern': 'Árabe',
}

export const categoryLabel = (category: string): string =>
    labels[category] || category
