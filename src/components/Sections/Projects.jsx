import React, { useEffect } from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.png";
import ProjectImg2 from "../../assets/img/projects/2.png";
import ProjectImg3 from "../../assets/img/projects/3.png";
import ProjectImg4 from "../../assets/img/projects/4.png";
import ProjectImg5 from "../../assets/img/projects/misoa.jpg";
import ProjectImg6 from "../../assets/img/projects/6.png";
import CakeImage from "../../assets/img/projects/cake.jpg";
import AddImage2 from "../../assets/img/add/add2.png";
import DialogPizza from "../dialogs/DialogPizza";
import DialogKueLebaran from "../dialogs/DialogKueLebaran";
import DialogCatering from "../dialogs/DialogCatering";
import DialogTahuWalik from "../dialogs/DialogTahuWalik";
import DialogMisoa from "../dialogs/DialogMisoa";
import DialogSoftCookies from "../dialogs/DialogSoftCookies";
import DialogCake from "../dialogs/DialogCake";
import { Alert } from "@mui/material";


const dialogPizza = () => {

}




export default function Projects() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickOpenKueLebaran = () => {
        setOpenKueLebaran(true);
    };
    const [openKueLebaran, setOpenKueLebaran] = React.useState(false);

    const handleClickCatering = () => {
        setOpenCatering(true);
    };
    const [openCatering, setOpenCatering] = React.useState(false);


    const handleClickWalik = () => {
        setOpenWalik(true);
    };
    const [openWalik, setOpenWalik] = React.useState(false);

    const handleClickMisoa = () => {
        setOpenMisoa(true);
    };
    const [openMisoa, setOpenMisoa] = React.useState(false);


    const handleClickSoftCookies = () => {
        setOpenSoftCookies(true);
    };
    const [openSoftCookies, setOpenSoftCookies] = React.useState(false);

    const handleClickCake = () => {
        setOpenCake(true);
    };
    const [openCake, setOpenCake] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
        setOpenKueLebaran(false);
        setOpenCatering(false)
        setOpenWalik(false)
        setOpenMisoa(false)
        setOpenSoftCookies(false)
        setOpenCake(false)
    };

    useEffect(() => {

        console.log(open)

    }, [])
    return (
        <Wrapper id="projects">

            <div className="whiteBg">
                <div className="container">
                    <HeaderInfo>
                        <h1 className="font40 extraBold">Menu yang kami sediakan</h1>
                        <Alert severity="success">
                            Click gambar untuk melihat harga dan pemesanan
                        </Alert>
                    </HeaderInfo>
                    <div className="row textCenter">
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <ProjectBox
                                img={ProjectImg1}
                                title="ADA Pizza"
                                text="Pizza home made dengan topping keju leleh, saus tomat buatan rumah, sosis sapi, dan jamur."
                                action={handleClickOpen}
                            />
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <ProjectBox
                                img={ProjectImg2}
                                title="ADA Kue Lebaran"
                                text="Kue Nastar, kastengel, Sagu Keju, Putri Salju, dan Lidah Kucing."
                                action={handleClickOpenKueLebaran}
                            />
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <ProjectBox
                                img={ProjectImg3}
                                title="ADA Katering"
                                text="Menu rumahan dengan berbagai pilihan lauk pauk."
                                action={handleClickCatering}
                            />
                        </div>
                    </div>
                    <div className="row textCenter">
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <ProjectBox
                                img={ProjectImg4}
                                title="ADA Tahu Walik"
                                text="Tahu dengan isian daging dan aci di cocol dengan sambel kecap yang pedas."
                                action={handleClickWalik}
                            />
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <ProjectBox
                                img={ProjectImg5}
                                title="ADA Misoa"
                                text="Gorengan Misoa dengan isian daging ayam/sapi cincang."
                                action={handleClickMisoa}
                            />
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <ProjectBox
                                img={ProjectImg6}
                                title="ADA Soft Cookies"
                                text="Cookies renyah diluar lembut didalam."
                                action={handleClickSoftCookies}
                            />
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <ProjectBox
                                img={CakeImage}
                                title="ADA Cake"
                                text="Aneka macam kue panggang dengan variasa rasa yang menarik."
                                action={handleClickCake}
                            />
                        </div>
                    </div>
                    <div className="row flexCenter">
                        <div style={{ margin: "50px 0", width: "200px" }}>
                            {/* <FullButton title="Load More" action={() => alert("clicked")} /> */}
                        </div>
                    </div>
                </div>
            </div>

            <DialogPizza isOpen={open} handleClose={handleClose} />
            <DialogKueLebaran isOpen={openKueLebaran} handleClose={handleClose} />
            <DialogCatering isOpen={openCatering} handleClose={handleClose} />
            <DialogTahuWalik isOpen={openWalik} handleClose={handleClose} />
            <DialogMisoa isOpen={openMisoa} handleClose={handleClose} />
            <DialogSoftCookies isOpen={openSoftCookies} handleClose={handleClose} />
            <DialogCake isOpen={openCake} handleClose={handleClose} />


        </Wrapper>
    );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
