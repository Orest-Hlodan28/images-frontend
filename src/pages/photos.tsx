import styles from './index.module.css';
import { useEffect, useMemo, useState } from "react";
import { ViewTypes } from "../constants/ViewTypes";
import ApiService from "../services/api-service";
import { Image } from "../types/Image";
import Carousel from "../components/carousel";
import Gallery from "../components/gallery";

const CHANGE_TYPE_LABELS = {
  [ViewTypes.GALLERY]: 'Change to carousel view',
  [ViewTypes.CAROUSEL]: 'Change to gallery view',
}

const CHANGE_TYPE_VALUES = {
  [ViewTypes.GALLERY]: ViewTypes.CAROUSEL,
  [ViewTypes.CAROUSEL]: ViewTypes.GALLERY,
}

const Photos = () => {

  const [data, setData] = useState<Image[]>([]);
  const [viewType, setViewType] = useState<ViewTypes>(ViewTypes.CAROUSEL);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await ApiService.get('/images');
        console.log(result)
        setData(result);
      } catch (error: any) {
        // alert(error?.message || "something went wrong")
      }
    };

    fetchData();
  }, []);

  const images = useMemo(() => data?.map(d => ({
    id: (d.id) + (d.albumId * 10),
    url: d.url,
    title: d.title
  })), [data]);

  console.log({ images })

  return (
    <div className={styles.container}>
      <div className={styles.container_wrapper}>
        <button
          onClick={() => setViewType(CHANGE_TYPE_VALUES[viewType])}>{CHANGE_TYPE_LABELS[viewType]}</button>
        {viewType === ViewTypes.CAROUSEL && (
          <Carousel images={images}/>
        )}
        {viewType === ViewTypes.GALLERY && (
          <Gallery images={images}/>
        )}
      </div>
    </div>
  )
}

export default Photos;
