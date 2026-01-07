// document.querySelectorAll('a[href^="0"]').forEach(onchor=>{
// onchor.addEventListener('click',function(e){
//     e.preventDefault();
//     document.querySelector(this.getAttribute('href')).
//     scrollIntoView({
//         behavior:'smooth'
//     });
// });
// });

// const productCards = document.querySelectorAll('.product-card');
// productCards.forEach(card=>{
//     card.addEventListener('mouseenter', function(){
//         this.style.transform = 'translateY(-15px)';
//     });
//     card.addEventListener('mouseleave', function(){
//         this.style.transform = 'translateY(0)';
//     });
// });


// ۱️⃣ اسکرول نرم به بخش‌های داخلی صفحه
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();                         // جلوگیری از رفتار پیش‌فرض لینک
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {                                 // بررسی وجود المان هدف
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ۲️⃣ افکت hover برای کارت‌های محصول
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-15px)';
    });
    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});
