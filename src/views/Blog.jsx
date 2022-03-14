//dependencies
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigation3, StoreCard001 as StoreCard } from "../components";
import { 
  MyThemeColors as colors,
  Box as Wrapper, 
  Box,
 } from "my-library-core";





const Blog = () => {

  return (
    <Wrapper
      grid 
      cols="150px 1fr"
      bg="rgb(234, 237, 237)"
      myStyle={{'@media (max-width: 550px)': {gtc: '1fr'}}}
    >
      <Navigation3 bg="#fff" />
      <div></div>
      <Box 
        m="3rem auto"
        grid
        gap="15px"
        cols="repeat(auto-fill, minmax(200px, 1fr))"
        myStyle={{mxW: '1300px'}} 
      >

        <StoreCard 
          className="cardEffect"
          rounded
          bg="#fff"
          image={{src: "https://edteam-media.s3.amazonaws.com/blogs/original/e87ba751-40ca-4ee0-8039-1a6f726f9d43.png"}}
          imageStyle={{
            'img': {
              br: '5px 5px 0 0', 
              aspectRatio: '1.5/1', 
              objectFit: 'cover', 
            }
          }}
          contentStyle = {{
            c: colors.text.main
          }}
          title="title"
          description={<p>lorem ipsum lorem ipsum </p>}
        />
        <StoreCard 
          className="cardEffect"
          rounded
          bg="#fff"
          image={{src: "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Ghostrunner_image1600w.jpg"}}
          imageStyle={{
            'img': {
              br: '5px 5px 0 0', 
              aspectRatio: '1.5/1', 
              objectFit: 'cover', 
            }
          }}
          contentStyle = {{
            c: colors.text.main
          }}
          title="title"
          description={<p>lorem ipsum lorem ipsum </p>}
        />
        <StoreCard 
          className="cardEffect"
          rounded
          bg="#fff"
          image={{src: "https://edteam-media.s3.amazonaws.com/blogs/original/ec296f11-b5f2-440b-b29d-bbf5c04b228e.png"}}
          imageStyle={{
            'img': {
              br: '5px 5px 0 0', 
              aspectRatio: '1.5/1', 
              objectFit: 'cover', 
            }
          }}
          contentStyle = {{
            c: colors.text.main
          }}
          title="title"
          description={<p>lorem ipsum lorem ipsum </p>}
        />
        <StoreCard 
          className="cardEffect"
          rounded
          bg="#fff"
          image={{src: "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Ghostrunner_image1600w.jpg"}}
          imageStyle={{
            'img': {
              br: '5px 5px 0 0', 
              aspectRatio: '1.5/1', 
              objectFit: 'cover', 
            }
          }}
          contentStyle = {{
            c: colors.text.main
          }}
          title="title"
          description={<p>lorem ipsum lorem ipsum </p>}
        />
        <StoreCard 
          className="cardEffect"
          rounded
          bg="#fff"
          image={{src: "https://edteam-media.s3.amazonaws.com/blogs/original/ec296f11-b5f2-440b-b29d-bbf5c04b228e.png"}}
          imageStyle={{
            'img': {
              br: '5px 5px 0 0', 
              aspectRatio: '1.5/1', 
              objectFit: 'cover', 
            }
          }}
          contentStyle = {{
            c: colors.text.main
          }}
          title="title"
          description={<p>lorem ipsum lorem ipsum </p>}
        />
        <StoreCard 
          className="cardEffect"
          rounded
          bg="#fff"
          image={{src: "https://www.enter.co/wp-content/uploads/2021/05/cyberpunk-2077-3-scaled-1-768x432.jpg"}}
          imageStyle={{
            'img': {
              br: '5px 5px 0 0', 
              aspectRatio: '1.5/1', 
              objectFit: 'cover', 
            }
          }}
          contentStyle = {{
            c: colors.text.main
          }}
          title="title"
          description={<p>lorem ipsum lorem ipsum </p>}
        />
        <StoreCard 
          className="cardEffect"
          rounded
          bg="#fff"
          image={{src: "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Ghostrunner_image1600w.jpg"}}
          imageStyle={{
            'img': {
              br: '5px 5px 0 0', 
              aspectRatio: '1.5/1', 
              objectFit: 'cover', 
            }
          }}
          contentStyle = {{
            c: colors.text.main
          }}
          title="title"
          description={<p>lorem ipsum lorem ipsum </p>}
        />
        <StoreCard 
          className="cardEffect"
          rounded
          bg="#fff"
          image={{src: "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Ghostrunner_image1600w.jpg"}}
          imageStyle={{
            'img': {
              br: '5px 5px 0 0', 
              aspectRatio: '1.5/1', 
              objectFit: 'cover', 
            }
          }}
          contentStyle = {{
            c: colors.text.main
          }}
          title="title"
          description={<p>lorem ipsum lorem ipsum </p>}
        />

<StoreCard 
          className="cardEffect"
          rounded
          bg="#fff"
          image={{src: "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Ghostrunner_image1600w.jpg"}}
          imageStyle={{
            'img': {
              br: '5px 5px 0 0', 
              aspectRatio: '1.5/1', 
              objectFit: 'cover', 
            }
          }}
          contentStyle = {{
            c: colors.text.main
          }}
          title="title"
          description={<p>lorem ipsum lorem ipsum </p>}
        /><StoreCard 
        className="cardEffect"
        rounded
        bg="#fff"
        image={{src: "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Ghostrunner_image1600w.jpg"}}
        imageStyle={{
          'img': {
            br: '5px 5px 0 0', 
            aspectRatio: '1.5/1', 
            objectFit: 'cover', 
          }
        }}
        contentStyle = {{
          c: colors.text.main
        }}
        title="title"
        description={<p>lorem ipsum lorem ipsum </p>}
      />

        
          
      </Box>
    </Wrapper>

  );
};
export default Blog;
