let horarios = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]
const sectionSchedule = document.querySelector('.schedule');
const dayly = document.querySelector('.daily');
const weekly = document.querySelector('.weekly');
const monthly = document.querySelector('.monthly')

for (i = 0; i < horarios.length; i++) {
  const div = document.createElement('div');
  div.classList.add("schedule__lista");
  let img = document.createElement('img');
  img.src = `./images/icon/icon${i}.svg`;
  div.appendChild(img);
  img.classList.add('schedule__img');
  div.style.backgroundColor = `var(--color${i})`
  const divInterna = document.createElement('div');
  divInterna.classList.add('div__interna')
  sectionSchedule.appendChild(div);
  div.appendChild(divInterna);
  const menu = document.createElement('div')
  menu.classList.add('menu')
  menu.innerHTML = horarios[i].title;
  divInterna.appendChild(menu);
  const menuImg = document.createElement('img')
  menu.appendChild(menuImg)
  menuImg.src = './images/icon-ellipsis.svg';
}

dayly.addEventListener('click', () => {
  const agenda = document.querySelectorAll('.div__interna')
  if(document.querySelector('.hora')){
    return
  }else if(document.querySelector('.exercises')){
      let excluir = document.querySelectorAll('.exercises')      
      excluir.forEach((elemento)=>{
        elemento.remove()
      })
  }else{
    for (i = 0; i < agenda.length; i++) {
      const exercises = document.createElement('div')
      exercises.classList.add('exercises')
      agenda[i].appendChild(exercises)
      const hour = document.createElement('p');
      hour.classList.add('hour')
      const week = document.createElement('p');
      week.classList.add('period')
      exercises.appendChild(hour);
      exercises.appendChild(week);
      hour.innerHTML = horarios[i].timeframes.daily.current + "hs"
      week.innerHTML = `Last Day - ${horarios[i].timeframes.daily.previous}hs`
      exercises.classList.add('hora')
    }
  }  
  })

  weekly.addEventListener('click', () => {
    const agenda = document.querySelectorAll('.div__interna')  
    if(document.querySelector('.semana')){
      return
    }else if(document.querySelector('.exercises')){
        let excluir = document.querySelectorAll('.exercises')      
        excluir.forEach((elemento)=>{
          elemento.remove()
        })
    }else{
      for (i = 0; i < agenda.length; i++) {
        const exercises = document.createElement('div')
        exercises.classList.add('exercises')
        agenda[i].appendChild(exercises)
        const hour = document.createElement('p');
        hour.classList.add('hour')
        const week = document.createElement('p');
        week.classList.add('period')
        exercises.appendChild(hour);
        exercises.appendChild(week);
        hour.innerHTML = horarios[i].timeframes.weekly.current + "hs"
        week.innerHTML = `Last Week - ${horarios[i].timeframes.weekly.previous}hs`
        exercises.classList.add('semana')
      }  
    }  
    })

    monthly.addEventListener('click', () => {
      const agenda = document.querySelectorAll('.div__interna')  
      if(document.querySelector('.mes')){
        return
      }else if(document.querySelector('.exercises')){
          let excluir = document.querySelectorAll('.exercises')      
          excluir.forEach((elemento)=>{
            elemento.remove()
          })
      }else{
        for (i = 0; i < agenda.length; i++) {
          const exercises = document.createElement('div')
          exercises.classList.add('exercises')
          agenda[i].appendChild(exercises)
          const hour = document.createElement('p');
          hour.classList.add('hour')
          const week = document.createElement('p');
          week.classList.add('period')
          exercises.appendChild(hour);
          exercises.appendChild(week);
          hour.innerHTML = horarios[i].timeframes.monthly.current + "hs"
          week.innerHTML = `Last Month - ${horarios[i].timeframes.monthly.previous}hs`
          exercises.classList.add('mes')
        }  
      }  
      })

