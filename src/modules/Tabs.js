export const Tabs = () => { 
    const headTab = document.querySelector('.container--tabs') // табы
    const bodyTab = document.querySelector('.container--content') // контент

    const getActiveTabName = () => { // функция для получения названия активной вкладки
      return headTab.querySelector('.tab-active').dataset.tab // возвращает значение data-tab активной кнопки
    }

    const setActiveContent = () => { // функция для установки активного элемента контента
      if (bodyTab.querySelector('.content-active')) {
        bodyTab.querySelector('.content-active').classList.remove('content-active') // если уже есть активный элемент контента то скрываем его
      }
      bodyTab.querySelector(`[data-tab=${getActiveTabName()}]`).classList.add('content-active') // затем ищет элемент контента, у которого значение data-tab совпадает со значением data-tab активной кнопки и отображаем его
    }

    headTab.addEventListener('click', e => { 
      const tab = e.target.closest('.tab') 
      if (!tab) return 
      if (tab.classList.contains('tab-active')) return 

      if (headTab.querySelector('.tab-active')) { 
        headTab.querySelector('.tab-active').classList.remove('tab-active')
      }

      tab.classList.add('tab-active')

      setActiveContent(getActiveTabName()) // устанавливает активный элемент контента в соответствии с активной кнопкой
    })
  }
