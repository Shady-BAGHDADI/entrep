export class SharedHelpers {
  //class to use all function that i use it more than one ,

  //change the form of data
  public static formatDate(date: string) {
    //test de securite with if statement
    if (Number.isInteger(+date) || date === undefined) {
      return '-';
    }
    if (Number.isNaN(Date.parse(date))) {
      return date;
    }
    //create a date
    const newDate = new Date(date);
    //return the new format
    return `${String(newDate.getDate()).padStart(2, '0')}/${String(
      newDate.getMonth() + 1
    ).padStart(2, '0')}/${newDate.getFullYear()}`;
  }
}
