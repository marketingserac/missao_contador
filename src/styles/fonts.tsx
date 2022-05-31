import { Global } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Digital';
        font-weight: 500;
        src: url('assets/fonts/digital-7.ttf');
      }
      @font-face {
        font-family: 'JosefinBold';
        font-weight: 700;
        src: url('assets/fonts/Josefin static/JosefinSans-Bold.ttf');
      }
      @font-face {
        font-family: 'JosefinRegular';
        font-weight: 700;
        src: url('assets/fonts/Josefin static/JosefinSans-Regular.ttf');
      }
      @font-face {
        font-family: 'JosefinMedio';
        font-style: bold;
        font-weight: bold;
        font-display: swap;
        src: url('assets/fonts/Josefin static/JosefinSans-Medium.ttf');
      }
      @font-face {
        font-family: 'JosefinLight';
        font-style: bold;
        font-weight: bold;
        font-display: swap;
        src: url('assets/fonts/Josefin static/JosefinSans-Light.ttf');
      }
      @font-face {
        font-family: 'Skyfall';
        font-style: bold;
        font-weight: bold;
        font-display: swap;
        src: url('assets/fonts/Skyfall Done/Skyfall.ttf');
      }
      `}
  />
)

export default Fonts