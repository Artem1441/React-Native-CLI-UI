import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

const IconLogo = (props) => (
  <Svg
    style={{
      enableBackground: "new 0 0 64 64",
    }}
    viewBox="0 0 64 64"
    xmlSpace="preserve"
    width={40}
    height={40}
    {...props}
  >
    <Path
      d="M61.577 26.996C59.212 14.405 49.595 4.788 37.004 2.423c-.239-.04-.479-.077-.72-.112A2.009 2.009 0 0 0 34 4.301V30h25.699a2.008 2.008 0 0 0 1.989-2.284 28.376 28.376 0 0 0-.111-.72z"
      style={{
        fill: "#cf9e76",
      }}
    />
    <Path
      d="M27.854 6.081C12.812 7.221 1.091 20.245 2.056 35.786 2.921 49.73 14.27 61.079 28.213 61.944c15.541.965 28.566-10.757 29.706-25.798A2.005 2.005 0 0 0 55.916 34H30V8.084a2.005 2.005 0 0 0-2.146-2.003z"
      style={{
        fill: "#cf9e76",
      }}
    />
    <Path
      d="M30 9C16.193 9 5 20.193 5 34s11.193 25 25 25 25-11.193 25-25H30V9z"
      style={{
        fill: "#dfb28b",
      }}
    />
    <Path
      d="M34 5v25h25C59 16.745 47.255 5 34 5z"
      style={{
        fill: "#dfb28b",
      }}
    />
    <Path
      d="M55.911 30c-.825-9.986-7.759-18.235-17.059-21L37 8.529a24.058 24.058 0 0 0-3-.44V30h21.911z"
      style={{
        fill: "#fcd770",
      }}
    />
    <Path
      d="M30 34V12C17.85 12 8 21.85 8 34s9.85 22 22 22 22-9.85 22-22H30z"
      style={{
        fill: "#fcd770",
      }}
    />
    <Circle
      cx={23}
      cy={49}
      r={2}
      style={{
        fill: "#fc6e51",
      }}
    />
    <Circle
      cx={40}
      cy={24}
      r={2}
      style={{
        fill: "#b27946",
      }}
    />
    <Circle
      cx={48}
      cy={17}
      r={2}
      style={{
        fill: "#fc6e51",
      }}
    />
    <Circle
      cx={26}
      cy={36}
      r={2}
      style={{
        fill: "#b27946",
      }}
    />
    <Circle
      cx={44}
      cy={42}
      r={2}
      style={{
        fill: "#b27946",
      }}
    />
    <Circle
      cx={16}
      cy={34}
      r={2}
      style={{
        fill: "#fc6e51",
      }}
    />
    <Path d="M55.916 33H31V8.084c0-.835-.352-1.641-.966-2.21a2.993 2.993 0 0 0-2.256-.79C12.065 6.274.078 20.075 1.057 35.848c.903 14.544 12.55 26.192 27.094 27.094.604.037 1.204.056 1.802.056 15.009-.001 27.818-11.665 28.963-26.776a3.003 3.003 0 0 0-3-3.222zM28.274 60.946c-13.538-.84-24.38-11.683-25.22-25.221C2.142 21.037 13.301 8.187 27.929 7.078a.966.966 0 0 1 .746.263c.21.195.325.459.325.743v2.941C16.78 11.551 7 21.653 7 34c0 12.683 10.317 23 23 23 10.758 0 19.971-7.309 22.403-17.773l-1.947-.453C48.234 48.327 39.823 55 30 55 18.421 55 9 45.579 9 34c0-3.091.688-6.018 1.893-8.664.121.101.248.218.4.371C11.839 26.253 12.586 27 14 27s2.161-.747 2.707-1.293c.49-.49.731-.707 1.293-.707v-2c-1.414 0-2.161.747-2.707 1.293-.49.49-.731.707-1.293.707s-.803-.217-1.293-.707a5.698 5.698 0 0 0-.887-.758C15.295 17.522 21.655 13.399 29 13.05V35h21.966c-.029.626-.076 1.25-.16 1.865l1.982.27c.096-.704.147-1.419.178-2.135h2.95a1.004 1.004 0 0 1 1.006 1.071c-1.11 14.628-13.942 25.798-28.648 24.875z" />
    <Path d="M23 46c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM37 24c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM26 33c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM44 39c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM16 31c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM35 50c-.562 0-.803-.217-1.293-.707C33.161 48.747 32.414 48 31 48v2c.562 0 .803.217 1.293.707C32.839 51.253 33.586 52 35 52s2.161-.747 2.707-1.293c.49-.49.731-.707 1.293-.707v-2c-1.414 0-2.161.747-2.707 1.293-.49.49-.731.707-1.293.707z" />
    <Path d="M62.679 27.575a25.961 25.961 0 0 0-.117-.749l-.003-.015C60.122 13.836 50.164 3.878 37.174 1.438a26.446 26.446 0 0 0-.748-.117A3.008 3.008 0 0 0 33 4.301V31h26.699a3.011 3.011 0 0 0 2.98-3.425zm-2.216 1.075a.997.997 0 0 1-.764.35h-2.904c-1.182-9.78-8.167-18.135-17.659-20.959l-.57 1.918c3.018.897 5.752 2.413 8.097 4.37A2.992 2.992 0 0 0 45 17c0 1.654 1.346 3 3 3a2.99 2.99 0 0 0 2.577-1.49A22.923 22.923 0 0 1 54.781 29H35V17.425c.091.083.184.173.293.282C35.839 18.253 36.586 19 38 19s2.161-.747 2.707-1.293c.49-.49.731-.707 1.293-.707v-2c-1.414 0-2.161.747-2.707 1.293-.49.49-.731.707-1.293.707s-.803-.217-1.293-.707c-.399-.399-.91-.904-1.707-1.147V9.21c.603.078 1.203.172 1.792.297l.416-1.957A25.247 25.247 0 0 0 35 7.198V4.301c0-.297.124-.567.35-.764a.988.988 0 0 1 .794-.235c.231.032.462.068.676.104 12.157 2.283 21.487 11.611 23.772 23.767.039.227.074.454.106.685a.981.981 0 0 1-.235.792zM48 16a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    <Path d="M49 23h2v2h-2zM45 25h2v2h-2zM37 38h2v2h-2zM31 41h2v2h-2zM19 39h2v2h-2zM25 18h2v2h-2zM22 25h2v2h-2zM14 42h2v2h-2z" />
  </Svg>
)

export default IconLogo
