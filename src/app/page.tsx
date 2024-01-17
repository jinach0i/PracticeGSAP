"use client"
import styles from "./page.module.scss";
import Image from "next/image";
import {
  그림1,
  그림2,
  그림3,
  그림4,
  그림5,
  그림6,
  그림7,
  그림8,
} from "../data";
import { useRef } from "react";
import gsap from "gsap";
// 특징1: mounse interaction+page를 움직임(=각각의 이미지를 움직이는게 아님)
export default function Home() {
  const plane1=useRef(null);
  const plane2=useRef(null);
  const plane3=useRef(null);
  const mouseSpeed=0.1;
  const gsapMouseMove = (e) => {
      // gsap mouse 위치 offset을 선언:
      const {movementX,movementY}=e;
      // gsap  set:
      // gsap set target에 ref명.current 쓰는 이유? 실질적 render가 안되는 빈 값을 참조한 것이기 때문
      // gasp set x값에 mouse 움직인 x값, y값에 ":
      gsap.set(plane1.current,{x:`+=${movementX*mouseSpeed}`,y:`+=${movementY*mouseSpeed}`})
  }
  return (
    <div id="wrap" className={styles.main} onMouseMove={(e) => gsapMouseMove(e)}>
      {/* page 3개를 한 데로 모음: */}
      {/* mouse움직임 기능 trigger attribute를 부착: */}
      <div ref={plane1} className={styles.plane}>
        <Image width={400} src={그림1} alt="a beach" />
        <Image width={400} src={그림2} alt="a beach" />
        <Image width={400} src={그림3} alt="a beach" />
      </div>
      <div ref={plane2} className={styles.plane}>
        <Image width={400} src={그림4} alt="a beach" />
        <Image width={400} src={그림5} alt="a beach" />
        <Image width={400} src={그림6} alt="a beach" />
      </div>
      <div ref={plane3} className={styles.plane}>
        <Image width={400} src={그림7} alt="a beach" />
        <Image width={400} src={그림8} alt="a beach" />
      </div>
      <div className={styles.title}>
        <h1>Floating Images Gallery</h1>
        <p>Next.js and GSAP</p>
      </div>
    </div>
  );
}
