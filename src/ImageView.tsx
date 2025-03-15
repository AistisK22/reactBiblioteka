import { useEffect, useRef, useState } from "react";

interface ImageViewProps {
  imageUrl: string;
  title: string;
}

const ImageView = ({ imageUrl, title }: ImageViewProps) => {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [open]);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        id="img-container"
        style={{ position: "relative", cursor: "pointer" }}
      >
        <img
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "250px",
            objectFit: "cover",
          }}
          src={imageUrl}
          alt="Preview"
        />
        <div className="overlay">
          <img
            style={{
              opacity: "1",
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            src="/eye-icon.png"
            alt="View"
          />
        </div>
      </div>

      <dialog
        ref={dialogRef}
        style={{
          border: "none",
          position: "relative",
          inset: "none",
          top: "90%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1000,
          background: "none",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
          maxWidth: "90vw",
          maxHeight: "90vh",
          borderRadius: "16px",
          padding: "0",
        }}
        onClick={() => setOpen(false)}
      >
        <img
          style={{ width: "auto", maxHeight: "88vh", borderRadius: "16px" }}
          src={imageUrl}
          alt="Full Size"
        />
        <div
          style={{
            backgroundColor: "black",
            opacity: "0.8",
            position: "absolute",
            bottom: "0",
            left: "0",
            color: "white",
            margin: ".1rem",
            padding: "1rem",
            fontWeight: "bold",
          }}
        >
          {title}
        </div>
      </dialog>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
        />
      )}
    </>
  );
};

export default ImageView;
