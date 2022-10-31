
const Skill = ({ children, title, experience }) => {
  return (
    <article className='experience__details'>
    {children} 
      <div>
        <h4>{title}</h4>
        <small>{experience}</small>
      </div>
    </article>
  )
}

export default Skill
