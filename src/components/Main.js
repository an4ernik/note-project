function Main() {
  return (
    <div className="row">
      <div className="col-12">
        <div className="text">
          <ul className="row button-list">
            <li className="col-6"><a href="/create" type="button" className="btn btn-primary">Створити замітку</a></li>
            <li className="col-6"><a href="/note" type="button" className="btn btn-primary">Подивитись замітку</a></li>
          </ul>
        </div>
        <div className="text">
          <p><strong>Share Notes</strong> - це сервіс для обміну замітками. Створіть замітку, відправте посилання на замітку і ваш друг зможе її переглянути. Після перегляду замітка буде видалена (або через 15 хвилин з моменту створення).</p>
          <p>Как сделать заметку? </p>
          <ul>
            <li>Перейдіть по ссилці</li>
            <li>Введіть текст та натисніть Create</li>
            <li>Відправте згенерований хеш другу!</li>
          </ul>
          <p>Як прочитати замітку? Перейдіть по надісланому URL або введіть адресу руками тут.</p>
        </div>
      </div>
    </div>

  );
}

export default Main;