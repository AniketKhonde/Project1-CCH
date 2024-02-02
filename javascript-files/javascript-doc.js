var currentChapter = 1;
        var totalChapters = 17; // Set the total number of chapters

        function showChapter(chapter) {
            var contentDiv = document.getElementById("content");
            contentDiv.innerHTML = document.getElementById("chapter" + chapter).innerHTML;
            currentChapter = chapter;
            updateButtons();
        }

        function nextChapter() {
            if (currentChapter < totalChapters) {
                showChapter(currentChapter + 1);
            }
        }

        function prevChapter() {
            if (currentChapter > 1) {
                showChapter(currentChapter - 1);
            }
        }

        function updateButtons() {
            document.getElementById("prevBtn").disabled = currentChapter === 1;
            document.getElementById("nextBtn").disabled = currentChapter === totalChapters;
            document.getElementById("prevBtn1").disabled = currentChapter === 1;
            document.getElementById("nextBtn1").disabled = currentChapter === totalChapters;
        }
        function changePage8(){
            window.location.href="index.html";
        }