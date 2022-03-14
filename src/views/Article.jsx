//----------------------IMPORTS---------------------------//
    import React from "react"
    //dependencies
        import styled from "styled-components"
    //
    import {Box} from 'my-library-core'
//------------------END_IMPORTS---------------------------//



//----------------STYLED_COMPONENTS------------------------//

const ArticleCover = styled.div`
    display: flex;
    background: #fbfbfe;
    width: 90%;
    padding: 3.5rem;
    border-radius: 10px;
    margin: auto;
    margin-bottom: 3rem;
    /* box-shadow: 2px 3px 15px #e4e4e4; */
    .cover_info{
        width: 50%;
        .title{
            margin-bottom: 1.5em;
        }
    }
    .cover_image {
        width: 50%;
        display: flex;
        align-items: center;
        .image{
            width: 100%;
            margin: auto;
            img{
                width: 100%;
                border-radius: 10px;
            }
        }
    }
    @media (max-width: 768px){
        flex-direction: column;
        .cover_image{
            width: 100%;
        }
        .cover_info{
            width: 100%;
            margin-bottom: 1rem;
        }
    }

`
//---------------------
const Content = styled.div`
    width: 100%;
    .main{
        width: 80%;
        margin: auto;
        padding: 20px;
    }
    article {
        font-size: 1.25em;
        color: #697477;
    }
    @media (max-width: 768px){
        .main{
            padding: 1rem;
            width: 100%;
        }
    }
    
`
const List = styled.ul``
const Image = styled.div`
    width: 100%;
    margin: 10px;
    img{
        border-radius: 10px;
        width: 69vw;
    }
`
const Carousel = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    width: 100%;
    margin: 20px 0;
    align-items: center;
    ::-webkit-scrollbar {
    height: 8px;
    background: #ccc;
    border-radius: 50px;
    display: block;
    
    
  }
  ::-webkit-scrollbar-thumb {
    background: #f2f2f2;
    border-radius: 10px;
    
  }

`

//end-styled-components
const Article = () => {
    return (
   
            <Box myStyle={{w: '90%', bg: '#fff'}}>
                <ArticleCover>
                        <div className="cover_info">
                            <h1 className="title">Eduardo Escalante: a sus 51 años consiguió un empleo en Canadá gracias a EDteam</h1>
                            <article className="abstract">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor doloribus tempore sapiente architecto unde quasi officia porro, perspiciatis exercitationem provident omnis accusantium quos recusandae nam voluptatum accusamus a illum odit?</p>
                                
                            </article>
                        </div>
                        <div className="cover_image">
                            <div className="image">
                                <img src="https://edteam-media.s3.amazonaws.com/blogs/original/17471a9e-062a-4b61-a3ff-d274a7fa70a3.png" alt="" />
                            </div> 
                        </div>
                </ArticleCover>
                
                <Content>
                        <section className="main">
                            <article>
                                <h2 className="subtitle">this is a sutitle</h2>
                                <p>hey you, yeah you, im talking width you, do you know who i am? no, who are you? i dont know  thats why im asking you? im lost and you? who are you? - eLorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima? Repudiandae, blanditiis ea commodi magni architecto minus? Repudiandae, quo officiis eos eum distinctio ad aperiam veniam, eaque quas ducimus aut.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima? Repudiandae, blanditiis ea commodi magni architecto minus? Repudiandae, quo officiis eos eum distinctio ad aperiam veniam, eaque quas ducimus aut.</p>
                                <br />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ad dolor laudantium facilis excepturi, exercitationem alias reprehenderit sunt autem repellat? Asperiores ab unde cum neque accusamus sequi esse veritatis possimus.</p>
                                <br />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima? Repudiandae, blanditiis ea commodi magni architecto minus? Repudiandae, quo officiis eos eum distinctio ad aperiam veniam, eaque quas ducimus aut.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima? Repudiandae, blanditiis ea commodi magni architecto minus? Repudiandae, quo officiis eos eum distinctio ad aperiam veniam, eaque quas ducimus aut.</p>
                                <br />
                                <h2 className="subtitle">this is a sutitle</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ad dolor laudantium facilis excepturi, exercitationem alias reprehenderit sunt autem repellat? Asperiores ab unde cum neque accusamus sequi esse veritatis possimus.</p>
                                <br />
                                <Image>
                                    <img src="https://edteam-media.s3.amazonaws.com/blogs/original/a4ddbb99-383e-4269-874e-742dcecbe5bb.jpg" alt="" />
                                </Image>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum dolor aliquam nam quod? Neque quos dolor saepe ducimus magnam, id cum similique fugit maxime, fugiat exercitationem libero quasi aspernatur accusantium.</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum dolor aliquam nam quod? Neque quos dolor saepe ducimus magnam, id cum similique fugit maxime, fugiat exercitationem libero quasi aspernatur accusantium.</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum dolor aliquam nam quod? Neque quos dolor saepe ducimus magnam, id cum similique fugit maxime, fugiat exercitationem libero quasi aspernatur accusantium.</p>
                                <br />
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum dolor aliquam nam quod? Neque quos dolor saepe ducimus magnam, id cum similique fugit maxime, fugiat exercitationem libero quasi aspernatur accusantium.</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum dolor aliquam nam quod? Neque quos dolor saepe ducimus magnam, id cum similique fugit maxime, fugiat exercitationem libero quasi aspernatur accusantium.</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum dolor aliquam nam quod? Neque quos dolor saepe ducimus magnam, id cum similique fugit maxime, fugiat exercitationem libero quasi aspernatur accusantium.</p>
                                <Carousel>
                                    <Image>
                                        <img src="https://edteam-media.s3.amazonaws.com/blogs/original/67fb78d9-5bfa-49b5-8def-3b1f9a8d2c8e.png" alt="" />
                                    </Image>
                                    <Image>
                                        <img src="https://edteam-media.s3.amazonaws.com/blogs/original/17471a9e-062a-4b61-a3ff-d274a7fa70a3.png" alt="" />
                                    </Image>
                                </Carousel>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum dolor aliquam nam quod? Neque quos dolor saepe ducimus magnam, id cum similique fugit maxime, fugiat exercitationem libero quasi aspernatur accusantium.</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum dolor aliquam nam quod? Neque quos dolor saepe ducimus magnam, id cum similique fugit maxime, fugiat exercitationem libero quasi aspernatur accusantium.</p>
                            </article>
                        </section>
                </Content>
            </Box>
  
    )
}
export default Article