import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonNote, IonPage,} from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import download from "../components/download.jpeg"
import 'swiper/swiper.css';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Swiper slidesPerView={2} spaceBetween={50}>
          <SwiperSlide >
            <IonCard>
            <img src={download}/>
            <IonCardContent>
              <IonCardHeader>slide no.1</IonCardHeader>
              <IonCardTitle>move it</IonCardTitle>
              <IonNote>move it here abd there </IonNote>
            </IonCardContent>
            </IonCard>
          <IonCard>
          <img src={download}/>
          </IonCard>
            </SwiperSlide>
          <SwiperSlide> <img src={download}/> </SwiperSlide>
          <SwiperSlide> <img src={download}/></SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default Home;
