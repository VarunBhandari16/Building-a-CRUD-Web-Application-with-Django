// Start the notification timer for definite period of time (Message/Notification timer). 

var message_timeout = document.getElementById("message-timer");
setTimeout(
    function()
    {
        message_timeout.style.display = "none";
    }, 1300);