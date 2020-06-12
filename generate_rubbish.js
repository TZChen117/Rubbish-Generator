// random selection comment index
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// generate rubbish by selection
function generateRubbish(job) {
  // jobs, task and phrase 
   const jobs = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家'
  }
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單啦!!!', '很容易吧(>"<)', '很快啦!!!', '很正常啊(>"<)']

  // pick up task and phrase
  if (!job) {
    return '是不是忘了什麼呀~~選個職業吧!!!'
  }
  let rubbish = ''
  if (job === 'engineer') {
    rubbish = jobs[job] + sample(task[job]) + sample(phrase)
  }

  if (job === 'designer') {
    rubbish = jobs[job] + sample(task[job]) + sample(phrase)
  }

  if (job === 'entrepreneur') {
    rubbish = jobs[job] + sample(task[job]) + sample(phrase)
  }

  // return generated rubbish  
  return rubbish
}
// export generateRubbish function for other files to use
module.exports = generateRubbish