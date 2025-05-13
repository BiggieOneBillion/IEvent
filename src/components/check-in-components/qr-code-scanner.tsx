import { Html5QrcodeScanner } from "html5-qrcode";
import React, { useEffect } from "react";

type Props = {
  setFormStateFn: React.Dispatch<React.SetStateAction<prevType>>;
  setShowEmail: React.Dispatch<React.SetStateAction<boolean>>;
};

type prevType = {
  access: string;
  email: string;
};

// import { Html5QrcodeScanner } from "html5-qrcode";
// import React, { useEffect } from 'react';

export const Html5QrcodePlugin = ({ setFormStateFn, setShowEmail }: Props) => {
  

  useEffect(() => {

    const scanner = new Html5QrcodeScanner(
        "qr-reader",
        { fps: 10, qrbox: 250 },
        false
      );
    
      const pauseScanner = () => {
        if (scanner) {
          scanner.pause();
          scanner.clear()
        }
      };
    
    
    
      const handleScanSuccess = (decodedText: any) => {
        console.log("Scanned code:", decodedText);
        if (decodedText) {
          setFormStateFn((prev: prevType) => {
            return { ...prev, access: decodedText };
          });
          setShowEmail(true);
          pauseScanner();
        }
      };
    // const scanner = new Html5QrcodeScanner(
    //   "qr-reader",
    //   { fps: 10, qrbox: 250 },
    //   false
    // );

    // const startScanner = () => {
    //     if (scanner) {
    //         scanner.clear()
    //     }

    //     const config = createConfig(props);
    //     const verbose = verbose === true;

    //     scanner = new Html5QrcodeScanner(
    //         qrcodeRegionId,
    //         config,
    //         verbose
    //     );

    //     scanner.render(
    //         onScanSuccess,
    //         props.qrCodeErrorCallback
    //     );

    //     props.setIsScanning(true);
    // };

    // const pauseScanner = () => {
    //   if (scanner) {
    //     scanner.pause();
    //   }
    // };

    // const resumeScanner = () => {
    //   if (scanner) {
    //     scanner.resume();
    //   }
    // };
    // Render the scanner
    scanner.render(handleScanSuccess, (error) => {
      console.log("QR scan error:", error);
      //   pauseScanner();
    });

    // Scanned code: CUS8215436406576

    // Clean up on unmount
    return () => {
      scanner
        .clear()
        .catch((error) => console.error("Failed to clear the scanner.", error));
    };
  }, []); // Make sure this hook only runs when `onScanSuccess` changes.

  return <div id="qr-reader"></div>;
};

export default Html5QrcodePlugin;
