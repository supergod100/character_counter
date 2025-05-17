document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const charCount = document.getElementById('char-count');
    const charCountNoSpace = document.getElementById('char-count-no-space');

    function updateCounts() {
        const text = textInput.value;
        
        // 文字数（スペース含む）
        charCount.textContent = text.length;
        
        // 文字数（スペース除く）
        charCountNoSpace.textContent = text.replace(/\s+/g, '').length;
    }

    // 入力時にカウントを更新
    textInput.addEventListener('input', updateCounts);
    
    // 初期表示時にもカウントを更新
    updateCounts();
}); 