
document.addEventListener('DOMContentLoaded', () => {
    // 1. معالجة معاينة الصورة
    const fileInput = document.getElementById('profilePic');
    const imagePreview = document.getElementById('imagePreview');
    const plusIcon = document.getElementById('plus-icon');

    fileInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                imagePreview.style.backgroundImage = `url(${e.target.result})`;
                plusIcon.style.display = 'none';
                imagePreview.style.borderStyle = 'solid';
            };
            reader.readAsDataURL(file);
        }
    });

    // 2. إدارة اللغات المتعددة
    const langSelect = document.getElementById('languageSelect');
    const langContainer = document.getElementById('languagesContainer');
    let selectedLangs = [];

    langSelect.addEventListener('change', function() {
        const val = this.value;
        if (val && !selectedLangs.includes(val)) {
            selectedLangs.push(val);
            renderLangs();
        }
        this.selectedIndex = 0;
    });

    window.removeLang = (name) => {
        selectedLangs = selectedLangs.filter(l => l !== name);
        renderLangs();
    };

    function renderLangs() {
        langContainer.innerHTML = selectedLangs.map(l => `
            <div class="lang-tag">
                <span>${l}</span>
                <span class="remove-btn" onclick="removeLang('${l}')">&times;</span>
            </div>
        `).join('');
    }

    // 3. معالجة الإرسال
    document.getElementById('sellerForm').onsubmit = (e) => {
        e.preventDefault();
        alert("Registration Successful!");
    };
});
document.getElementById('sellerForm').onsubmit = function(e) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        e.preventDefault(); // منع الإرسال
        alert("Passwords do not match! Please check again.");
        return false;
    }
    
    // إذا كانت متطابقة يكمل الإرسال
    alert("Welcome to Taskly! Registration Successful.");
};