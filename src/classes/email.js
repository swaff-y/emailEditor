class Email{
    constructor(data){
        this.from = data.from || "";
        this.to = data.to || "";
        this.message = data.message || "";
        this.subject = data.subject || "";
    }
    checkString(string){
        if(!string) return false;
        if(typeof string !== "string") return false;
        return true;
    }
    setFrom(string){
        if(this.checkString(string)){
            this.from = string;
            return this;
        }
        return false;
    }
    setTo(string){
        if(this.checkString(string)){
            this.to = string;
            return this;
        }
        return false;
    }
    setMessage(string){
        if(this.checkString(string)){
            this.message = string;
            return this;
        }
        return false;
    }
    setSubject(string){
        if(this.checkString(string)){
            this.subject = string;
            return this;
        }
        return false;
    }
}

export default Email;