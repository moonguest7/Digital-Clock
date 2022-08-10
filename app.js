const myLabel = document.getElementById("my-Label")

update()
setInterval(update, 1000)

function update(){
    let date = new Date()
    myLabel.innerHTML = formatTime(date)

    function formatTime(date){
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()

        // am/pm 
        let amOrPm = hours >= 12 ? "pm" : "am"

        // standard time
        hours = (hours % 12) || 12

        // adds zeros before single digits
        hours = formatZeros(hours)
        minutes = formatZeros(minutes)
        seconds = formatZeros(seconds)

        return `${hours}:${minutes}:${seconds} ${amOrPm}`
    }

    function formatZeros(time){
        time = time.toString()
        return time.length < 2 ? "0" + time : time
    }
}