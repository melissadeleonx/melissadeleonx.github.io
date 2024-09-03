/**
 * morpher.js is adapted from Ethereum's open source repository.
 * Original source: https://github.com/ethereum/ethereum-org-website
 * License: MIT License
 *
 */

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('morph-button');
    const words = [
        "<study><code><debug><repeat>", 
        "学习。编码。调试。重复。", 
        "mag-aral. mag-code. mag-debug. ulitin.", 
        "studia. codifica. eseguire il debug. ripetere.", 
        "學習。編碼。除錯。重複。", 
        "étudier. coder. déboguer. répéter.", 
        "studieren. programmieren. debuggen. wiederholen.", 
        "estudar. codificar. depurar. repetir.", 
        "学ぶ。コーディング。デバッグ。繰り返す。", 
        "учиться. кодировать. отлаживать. повторять.", 
        "학습하다. 코딩하다. 디버깅하다. 반복하다.", 
        "دراسة. برمجة. تصحيح الأخطاء. كرر.", 
        "अध्ययन करें। कोड करें। डिबग करें। दोहराएं।", 
        "অধ্যয়ন করুন। কোড করুন। ডিবাগ করুন। পুনরাবৃত্তি করুন।", 
        "çalış. kodla. hata ayıkla. tekrar et.", 
        "estuderen. coderen. foutopsporen. herhalen.", 
        "studera. koda. felsök. upprepa.", 
        "studer. kode. feilsøk. gjenta.", 
        "studer. kode. fejlret. gentag.", 
        "ucz się. koduj. debuguj. powtarzaj."
    ];

    let currentIndex = 0;

    // Function to morph text
    function morpher(start, end) {
        const chars = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()".split("");
        const duration = 6;
        const frameRate = 20;

        const textString = start.split("");
        const result = end.split("");
        const slen = textString.length;
        const rlen = result.length;

        let present = new Date();
        let past = present.getTime();
        let count = 0;
        let spentTime = 0;
        const splitTime = (duration * 70) / Math.max(slen, rlen);

        function update() {
            present = new Date();
            spentTime += present.getTime() - past;

            for (let i = count; i < Math.max(slen, rlen); i++) {
                const random = Math.floor(Math.random() * chars.length);
                textString[i] = chars[random];
            }

            if (spentTime >= splitTime) {
                count += Math.floor(spentTime / splitTime);
                for (let j = 0; j < count; j++) {
                    textString[j] = result[j] || "";
                }
                spentTime = 0;
            }

            button.textContent = textString.join("");

            past = present.getTime();

            if (count < Math.max(slen, rlen)) {
                setTimeout(() => {
                    window.requestAnimationFrame(update);
                }, 1000 / frameRate);
            }
        }

        update();
    }

    function startMorphing() {
        let counter = 0;

        setInterval(() => {
            const start = button.textContent;
            const end = words[counter];

            morpher(start, end);

            if (counter < words.length - 1) {
                counter++;
            } else {
                counter = 0;
            }
        }, 3000);
    }

    startMorphing();
});
