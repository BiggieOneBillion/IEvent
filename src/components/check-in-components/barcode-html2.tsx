import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";

// Define Props interface for TypeScript
interface Html5QrcodePluginProps {
  fps?: number;
  qrbox?: number;
  aspectRatio?: number;
  disableFlip?: boolean;
  verbose?: boolean;
  qrCodeSuccessCallback: (decodedText: string, description:any) => void;
  qrCodeErrorCallback?: (errorMessage: string) => void;
}

const qrcodeRegionId = "html5qr-code-full-region";

// Creates the configuration object for Html5QrcodeScanner.
const createConfig = (props: Html5QrcodePluginProps): any => {
  let config: any = {};
  if (props.fps) {
    config.fps = props.fps;
  }
  if (props.qrbox) {
    config.qrbox = props.qrbox;
  }
  if (props.aspectRatio) {
    config.aspectRatio = props.aspectRatio;
  }
  if (props.disableFlip !== undefined) {
    config.disableFlip = props.disableFlip;
  }
  return config;
};

const Html5QrcodePlugin: React.FC<Html5QrcodePluginProps> = (props) => {
  useEffect(() => {
    // When component mounts
    const config = createConfig(props);
    const verbose = props.verbose === true;

    // Success callback is required.
    if (!props.qrCodeSuccessCallback) {
      throw new Error("qrCodeSuccessCallback is a required callback.");
    }

    const html5QrcodeScanner = new Html5QrcodeScanner(
      qrcodeRegionId,
      config,
      verbose
    );
    html5QrcodeScanner.render(() => {
      props.qrCodeSuccessCallback;
    //   setTimeout(() => {
    //     html5QrcodeScanner.pause();
    //   }, 2000);
    }, props.qrCodeErrorCallback);

    // Cleanup function when the component will unmount
    return () => {
      html5QrcodeScanner.clear().catch((error) => {
        console.error("Failed to clear html5QrcodeScanner. ", error);
      });
    };
  }, []); // Add props to the dependency array

  return <div id={qrcodeRegionId} />;
};

export default Html5QrcodePlugin;
