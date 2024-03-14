import React from "react";
import "./style.css";
import aa from "./aa.jpg";
import ss from "./ss.jpg";
import dd from "./dd.jpg";
import ff from "./ff.jpg";
import qq from "./qq.png";
import ww from "./ww.jpg";
import ee from "./ee.jpg";
import m1 from "./m1.jpg";
import m2 from "./m2.jpg";
import m3 from "./m3.jpg";
import m4 from "./m4.jpg";

function Home(){

    return(
        <div className="container4">
            {/* <Card 
                txtcolor="black"
                bgcolor="info"
                header="BadBank Landing Page"
                title="Welcome to the bank."
                text="We are here for all of your banking needs, but do not provide any security. In fact, we happily share all the users' information!"
                body={(<img src={bank} className="img-fluid" alt="responsive image" />)}
            /> */}
            <div className="about_us">
                <h1>ABOUT US</h1>
                <div className="about">
                    <p>The Banco de España is a public law entity which performs the functions of a national central bank in Spain.
                         It is also responsible for the supervision of the Spanish banking system and of other financial intermediaries operating in Spain.</p>
                    <p>The Banco de España performs these functions as a member of the following European institutions:
                         the European System of Central Banks (ESCB), the Eurosystem, the Single Supervisory Mechanism (SSM)
                          and the Single Resolution Mechanism (SRM).</p>
                </div>
                <div className="mission">
                    <div>
                    <img src={m1}></img>
                    </div>
                    <div className="h1">
                    <h2 >OUR MISSION</h2>
                    <p>The Banco de España’s mission is to achieve price stability and financial stability in order to support stable economic growth. The Bank’s analysis also contributes to other economic policy-making.</p>
                </div>
                </div>
                <div className="organ">
                    <div className="h1">
                    <h2 >ORGANIZATION</h2>
                    <p>The Banco de España performs its functions through its governing bodies and its Directorates General.</p>
                    <p>It has two head offices in Madrid and 15 branch offices across Spain.</p>
                    </div>
                    <div>
                    <img src={m2}></img>
                    </div>
                </div>
                <div className="inter">
                    <div>
                        <img src={m3}></img>
                    </div>
                    <div className="h1">
                        <h2 >INTERNATIONAL COOPERATION</h2>
                        <p>The Banco de España’s international cooperation activity is a valuable instrument for achieving its monetary and financial stability goals, 
                            through which it forges lasting partnerships with financial institutions that share the same objectives. These activities are founded on 
                            exchanging experiences and knowledge and disseminating best central banking practices, and are carried out through coordinated action by
                             Banco de España experts engaged in international technical cooperation activities and projects.</p>
                    </div>
                </div>
                <div className="act">
                    <div className="h1">
                        <h2>EUROPEAN ACTIVITIES</h2>
                        <p>As a national central bank, the Banco de España has been a member of the European System of Central Banks (ESCB) and the Eurosystem since 1999,
                             when the Economic and Monetary Union began and the euro was introduced. The Banco de España is also the national competent authority in the
                              area of financial supervision, and has been part of the European Single Supervisory Mechanism (SSM) since it was set up in 2014. Read on to 
                              learn about the key concepts of these institutions and how the Bank participates in their operation.</p>
                    </div>
                    <div>
                        <img src={m4}></img>
                    </div>
                </div>
            </div>
            <div className="for">
                <h2>NEWS</h2>
                <div className="grid-1">
                    <div>
                        <img src={aa}></img>
                        <p>Encuesta a las empresas españolas sobre la evolución de su actividad: primer trimestre de 2024</p>
                    </div>
                    <div>
                        <img src={ss}></img>
                        <p>La reacción de los hogares ante el repunte de los precios en España y en la UEM</p>
                    </div>
                    <div>
                        <img src={dd}></img>
                        <p>Asymmetries in the transmission of energy price increases and decreases to underlying inflation in the euro area and Spain</p>
                    </div>
                    <div>
                        <img src={ff}></img>
                        <p>Statement by the ECB Governing Council on advancing the Capital Markets Union</p>
                    </div>
                </div>
            </div>
            <div className="for2">
                <h2>HIGHLIGHTS</h2>
                <div className="grid-2">
                    <div>
                        <img src={qq}></img>
                        <a href="">Why do gender gaps still exist at work?</a>
                    </div>
                    <div>
                        <img src={ww}></img>
                        <a href="">External evaluation of the macroeconomic projections</a>
                    </div>
                    <div>
                        <img src={ee}></img>
                        <a href="">Environmental sustainability</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;