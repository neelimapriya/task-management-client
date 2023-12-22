const Faq = () => {
  return (
    <div className="space-y-3 font-serif mb-10 p-3">
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">
        What is To Do application?
        </div>
        <div className="collapse-content">
          <p> This Todo app can Add, Update, Delete your tasks that you add in daily Todo list.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How can i Add my ToDo List.
        </div>
        <div className="collapse-content">
          <p>In the banner you can see Let`s explore button. click here</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        What is a todo list?
        </div>
        <div className="collapse-content">
          <p>They list everything that you have to do, You can update your task todo to ongoing and while complete you can make task complete. </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
