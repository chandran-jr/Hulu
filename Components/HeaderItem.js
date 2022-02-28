function HeaderItem({title,Icon}) {
  return (
    <div className="group">
        <Icon className="h-8 mb-1"/>
        <p className=" opacity-0 tracking-widest group-hover:opacity-100">{title}</p>
    </div>
  )
}

export default HeaderItem