import { createContext, useState, useMemo } from 'react';
export const MyContext = createContext(null);

const MyContextProvider = (props) =>{
    const [cart, setCart] = useState([]);
    const whatsappNumber = '';

    const addToCart = (item) => {
        if (!item) return;
        setCart((prev) => {
            const idx = prev.findIndex((p) => p.id ? p.id === item.id : p.name === item.name);
            if (idx !== -1) {
                const copy = [...prev];
                const q = (copy[idx].quantity || 1) + (item.quantity || 1);
                copy[idx] = { ...copy[idx], quantity: q };
                return copy;
            }
            return [...prev, { ...item, quantity: item.quantity || 1 }];
        });
    };

    const cartCount = useMemo(() => cart.reduce((s, i) => s + (i.quantity || 1), 0), [cart]);

    const composeCartMessage = (items) => {
        const lines = [];
        lines.push('Order Enquiry from Vinto Printz');
        items.forEach((i, k) => {
            const name = i.name || 'Item';
            const qty = i.quantity || 1;
            const price = typeof i.price === 'number' ? `₹${i.price}` : '';
            lines.push(`${k + 1}. ${name} x ${qty} ${price}`);
        });
        const total = items.reduce((s, i) => s + ((i.quantity || 1) * (typeof i.price === 'number' ? i.price : 0)), 0);
        if (total > 0) lines.push(`Total: ₹${total}`);
        lines.push(window.location.origin);
        return lines.join('\n');
    };

    const shareCartOnWhatsApp = () => {
        const message = composeCartMessage(cart);
        const base = 'https://wa.me';
        const url = whatsappNumber && whatsappNumber.trim().length > 0
            ? `${base}/${whatsappNumber.trim()}?text=${encodeURIComponent(message)}`
            : `${base}/?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    const contextValue = {
        cart,
        addToCart,
        cartCount,
        shareCartOnWhatsApp,
    };

    return(
        <MyContext.Provider value={contextValue}>
            {props.children}
        </MyContext.Provider>
    )
}
export default MyContextProvider;
