

    const  formatter =  (input, date, instance) => {
        const value = date.toLocaleDateString()
        input.value = value // => '1/1/2099'
  }

     datepicker('.datepicker')
     datepicker('.datepicker2')

