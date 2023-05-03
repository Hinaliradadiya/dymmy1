import { useEffect, useState } from "react";
import ReactImageMagnify from 'react-image-magnify';
import { useParams } from "react-router-dom";
import axios from "axios";
import {Container} from 'react-bootstrap'
import Header from "./Header";

function Singleproduct() {
    let [pro, getpro] = useState  ([]);
    let [status, getstatus] = useState ([]);
    const [data,setdata] = useState ([]);

    const [img,setimg] = useState (data[1])
    const prom = useParams ();

    const handleClick = (item,i) => {
        setimg(itme);
    }
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${prom.id}`)
            .then(function (response) {
                // handle success
                setval(response.data)
                getpro(response.data)
                setdata1(response.data.images)
                getstatus(true)
                // console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [prom.id])

    return(
        <>
        <Header/>
        <Container className="d-flex gap">
            <div className="">
                {
                    data1.map((item,i) => {
                        return(
                            <>
                            <div key={i} onMouseOver={() => hoverhandel(item,i)}>
                                <img src={item} width='100px' height="80px"></img>
                            </div>
                            </>
                        )
                    })
                }
            </div>
            <div className="col-3 pt-3 wrapper">
            <ReactImageMagnify {...{
    smallImage: {
        // alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: watchImg300
    },
    largeImage: {
        src: img,
        width: 1200,
        height: 1800
    }
}} />

            </div>
        </Container>
        </>
    )


}
export default Singleproduct