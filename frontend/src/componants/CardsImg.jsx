import React from "react";

const Card = ({ image, title }) => (
  <div className="card" style={{ marginBottom: "14px" }}>
    <img
      src={image}
      style={{ height: "250px", objectFit: "cover" }}
      alt={title}
      className="card-img-top"
    />
    <div className="card-body" style={{padding:'0px'}}>
      <h5
        className="card-title"
        style={{
          position: "absolute",
          marginTop: "-238px",
          color: "white",
          fontWeight: "600",
          paddingLeft:'15px'
        }}
      >
        {title}
        <span> </span>
        <span>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAgVBMVEX///8AAAAAAAAAAAAAAAD////29vbo7Pfm6PTg5vTg5PLM2e7Gz+T1w5nAyuH1v5P0uoi2wt2zw+T0t4S0wNzzsnvysHn3rG2qtNqqs9nxp2rwomHwoV3unFjsl0/slUyLnciHmsd3jb8qm2MgmlkqlV8ellook10YlFUjj1gfjVULJqFEAAAABXRSTlMAESIzRJTdRHwAAACSSURBVHjardHLDoIwEIXhtlgQGctVvBVRqBR8/wd0FJuQdFyY+K9O5lsO+2ecDO+ajDOht0RngZCWXqlGaLKdV9YgtPVpbo99Zn1BkK4IIJIuhNDdiyQpnIQLALjeQBGQq65TOQHrI8BhQ4CMqyqWC7BmnDPGDG7aF/SDV39HmCiwbyCaEB5kgvFgRRTwrx/8vSeVOB6PJ+z3YAAAAABJRU5ErkJggg=="
            alt=""
          />
        </span>
      </h5>
    </div>
  </div>
);

const ImageGrid = () => (
  <div className="container">
    <h2>Trending destinations</h2>
    <p>Most popular choices for travelers from India</p>
    <div className="row">
      <div className="col-md-6">
        <Card
          image="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
          title="New Delhi"
        />
      </div>
      <div className="col-md-6">
        <Card
          image="https://cf.bstatic.com/xdata/images/city/600x600/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o="
          title="Mumbai"
        />
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <Card
          image="https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
          title="Chennai"
        />
      </div>
      <div className="col-md-4">
        <Card
          image="https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o="
          title="Bangalore"
        />
      </div>
      <div className="col-md-4">
        <Card
          image="https://cf.bstatic.com/xdata/images/city/600x600/684653.jpg?k=306ccafcc8a4a7e23b9e8a05b183453fe885b312a4daa5ce76ec39a1b79cbc6f&o="
          title="Hyderabad"
        />
      </div>
    </div>
  </div>
);

export default ImageGrid;
