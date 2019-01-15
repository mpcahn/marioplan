const initState = {
  projects: [
    {id: 1, title: 'React', content: 'finish react tutorial'},
    {id: 2, title: 'Get Job', content: 'Apply to 5 jobs per day'},
    {id: 3, title: 'Meditate', content: 'Meditate a few times per day'}
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project)
      return state
    case 'CREATE_PROJECT_ERROR':
      console.log('CREATE PROJECT ERROR', action.err)
      return state
    default:
      return state
  }  
}

export default projectReducer