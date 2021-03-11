const saveToDb = async (entry, populateEntity) => {
  if (populateEntity) {
    return (await entry.save()).populate(populateEntity).execPopulate();
  } else {
    return entry.save();
  }
};

const findAll = (model) => model.find();

const findById = (model, id) => {
  return model.findOne({ _id: id });
};

const findAndUpdate = (model, id, valueToUpdate, populateEntity) => {
  if (populateEntity) {
    return model
      .findByIdAndUpdate(id, valueToUpdate, {
        new: true,
        useFindAndModify: false,
      })
      .populate(populateEntity);
  } else {
    return model.findByIdAndUpdate(id, valueToUpdate, {
      new: true,
      useFindAndModify: false,
    });
  }
};

export { saveToDb, findById, findAll, findAndUpdate };
