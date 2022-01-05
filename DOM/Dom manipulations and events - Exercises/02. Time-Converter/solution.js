function attachEventsListeners() {

    //Calculate the time units 
    const ratios ={
        days:1,
        hours:24,
        minutes:1440,
        seconds:86400
    };

    function convert(value,timeUnit) {
        const inDays = value / ratios[timeUnit];
        return {
            days: inDays,
            hours: inDays * ratios.hours,
            minutes: inDays * ratios.minutes,
            seconds: inDays * ratios.seconds

        };
    }
    //Create event listener using event delegation mechanism - try to catch the event at every button click and input.value

    const inputDays = document.querySelector('#days');
    const inputHours = document.querySelector('#hours');
    const inputMinutes = document.querySelector('#minutes');
    const inputSeconds = document.querySelector('#seconds');

    document.querySelector('main').addEventListener('click',onConvert);

    function onConvert(event) {
        if (event.target.tagName === 'INPUT' && event.target.type === 'button') {
            const input = event.target.parentNode.querySelector('input[type="text"]');

           const time = convert(Number(input.value),input.id);

           inputDays.value = time.days;
           inputHours.value = time.hours;
           inputMinutes.value = time.minutes;
           inputSeconds.value = time.seconds;
        }
    }


}