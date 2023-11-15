let isReading = false;

        function toggleRead() {
            const content = document.body.innerText;
            const utterance = new SpeechSynthesisUtterance(content);

            if (!isReading) {
                speechSynthesis.speak(utterance);
                isReading = true;
            } else {
                speechSynthesis.cancel();
                isReading = false;
            }
        }