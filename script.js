

    // تغيير لون الزر عند الضغط عليه
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("mousedown", function () {
            this.style.backgroundColor = "#800000"; // أحمر داكن عند الضغط
        });
        button.addEventListener("mouseup", function () {
            this.style.backgroundColor = "#ff0000"; // اللون الأصلي الأحمر
        });
    });

    // تكبير الزر عند تمرير الماوس عليه
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.2)";
        });
        button.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });

    // تكبير المنتج عند تمرير الماوس عليه
    document.querySelectorAll(".product").forEach(product => {
        product.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
            this.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.2)";
        });
        product.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.1)";
        });
    });
});
