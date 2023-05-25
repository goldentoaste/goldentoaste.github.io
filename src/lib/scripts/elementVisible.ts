

// make this more efficient in the future
export default function elementVisible(node: Element, [callback, windowHeight, botOffset]: [(node: Element) => void, number, number]) {

    function onScroll(e?: Event) {
        const rect = node.getBoundingClientRect();

        if (rect.bottom < windowHeight - botOffset) {
            callback(node)
            document.removeEventListener('scroll', onScroll);
        }
    }

    document.addEventListener('scroll', onScroll);


    return {
        destroy() {
            document.removeEventListener('scroll', onScroll);
        },

        update([_, newHeight, newOffset]: [(node: Element) => void, number, number]) {
            windowHeight = newHeight;
            botOffset = newOffset;

            onScroll(undefined)
        }
    }
}
