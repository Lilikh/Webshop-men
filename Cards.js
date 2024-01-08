export const card = (data) => {
  let output = `<div class="card p-1" style="width: 20rem;top:2rem;  border: 2px solid black; ">
        
        <div  class="card-body" style="width: 12rem; flex:auto; display: flex; align-self: center;">
            <img class="card-img-top"  src="${data.image}" alt="Card image cap">
        </div>
        <div class="card-body" >
            <h5 class="card-title">${data.title}</h5>
            <form id="form">
            <input type="hidden" id="postId"  value="${
              data.id
            }" />
            <button type="submit" id="seMore" class="btn btn-link">Se mer</button>
            </form>
           
            <div  class="card-bodies" style="display: flex; flex-wrap: nowrap; align-items: center;  gap: 0.5rem;">
                <p class="card-text"></p>
                <a href="#" class="btn btn-primary" style="flex-shrink: 0;" >${
                  data.price
                } Kr</a>
              <div  style="display: flex; align-items: center; margin-left: 2rem; gap:0.5rem ">
                <a href="#" class=" btn btn-primary btn-minus " data-action="minus" data-id="${
                  data.id
                }">-</a>
                <span class="quantity">${data.quantity || 0}</span>
                <a href="#" class=" btn btn-primary btn-plus" data-action="plus" data-id="${
                  data.id
                }">+</a>
              </div>
            </div>
        </div>`;

  return output;
};
