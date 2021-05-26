const server = 'https://jsonplaceholder.typicode.com/posts';

const sendData = async (data, callBack, falseCallBack) => {
  const request = new XMLHttpRequest();
  request.open('POST', server);

  request.addEventListener('readystatechange', () => {
    if (request.readyState !== 4) return;
    if (request.status === 200 || request.status === 201) {
      const response = JSON.parse(request.responseText);
      callBack(response.id);
    } else {
      falseCallBack(request.status);
      throw new Error(request.status);
    }
  });
  request.send(data);
};

const messageAlert = (form, text, color) => {
  const smallElem = document.createElement('small');
  smallElem.textContent = text;
  smallElem.style.color = color;
  form.append(smallElem);

  setTimeout(() => {
    for (const item of form.elements) {
      if (item.type === 'submit') {
        item.style.opacity = '1';
        item.disabled = false;
        form.removeChild(form.lastElementChild);
      }
    }
  }, 5000);
};

const formHandler = (form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {};
    let flag = true;
    for (const item of form.elements) {
      if (item.type === 'submit') {
        item.disabled = true;
        item.style.opacity = '0.4';
      }
    }
    for (const item of form.elements) {
      const { name, value } = item;

      if (name) {
        if (value.trim()) {
          item.style.border = '';
          data[name] = value.trim();
        } else {
          item.style.border = '1px solid red';
          flag = false;
          item.value = '';
        }
      }
    }

    if (!flag) {
      messageAlert(form, `Вы ничего не ввели или ввели одни пробелы`, 'red');
      return;
    }

    sendData(
      JSON.stringify(data),
      (id) => {
        messageAlert(
          form,
          `Ваша заявка № ${id} !\nВ ближайшее время с вами свяжемся`,
          'green'
        );
        form.reset();
      },
      (err) => {
        messageAlert(
          form,
          'На сервере технические неполадки, попробуйте отправить заявку в следующий раз',
          'red'
        );
        form.reset();
      }
    );
  });
};

export default function SendForm() {
  const formElems = document.querySelectorAll('.form');
  formElems.forEach(formHandler);
}
