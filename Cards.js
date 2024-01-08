export const card = (data) => {
  let output = `<div class="card p-1" style="width: 20rem; ">
        
        <div  class="card-body" style="width: 18rem;  padding-left: 3rem; ">
            <img class="card-img-top"  src="${data.image}" alt="Card image cap">
        </div>
        <div class="card-body" >
            <h5 class="card-title">${data.title}</h5>
            <div style= display: flex; flex-direction: row;>
                <a href="#" class="btn btn-primary btn-minus" data-action="minus" data-id="${
                  data.id
                }">-</a>
                <span class="quantity">${data.quantity || 0}</span>
                <a href="#" class="btn btn-primary btn-plus" data-action="plus" data-id="${
                  data.id
                }">+</a>
                <p class="card-text"></p>
                <a href="#" class="btn btn-primary" >${data.price} Kr</a>
            </div>
        </div>`;

  return output;
};
