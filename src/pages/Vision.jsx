import SearchImages from '../utils/SearchImages'

const Vision = () => {
    const urlMissao = SearchImages("Visao");
  return (
    <section className="section">
      <div className="content contentAbout">
        <div className='aboutImage'>
          {urlMissao ? (
            <img src={urlMissao.imageUrl} alt={urlMissao.name} />
          ) : (
            <p>Imagem não encontrada</p>
          )}
        </div>
        
        <div className='aboutInformation'>
          <h2>Visão</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, numquam? Eaque dolor vel fuga, odio at tempora hic nihil eveniet qui recusandae blanditiis illo sunt? Consequatur veritatis odio esse dolores.</p>
        </div>
      </div>
    </section>
  )
}

export  {Vision}