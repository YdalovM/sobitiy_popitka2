document.addEventListener("DOMContentLoaded", function(event) {
    let field = document.getElementById("field");
    let ball = document.getElementById("ball");
    
    field.addEventListener("click", function(event) {
        let ballSize = ball.offsetWidth;
        let fieldRect = field.getBoundingClientRect();

        let clickX = event.clientX - fieldRect.left - ballSize/2;
        let clickY = event.clientY - fieldRect.top - ballSize/2;

        if (clickX < 0) {
            clickX = 0;
        } else if (clickX + ballSize > fieldRect.width) {
            clickX = fieldRect.width - ballSize;
        }

        if (clickY < 0) {
            clickY = 0;
        } else if (clickY + ballSize > fieldRect.height) {
            clickY = fieldRect.height - ballSize;
        }

        ball.style.left = clickX + "px";
        ball.style.top = clickY + "px";
    });
});