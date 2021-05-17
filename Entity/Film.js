export class Film {

    constructor(titre, url, resumeP, commentsP, noteP) {
        this.titre = titre;
        this.url = url;
        this.resumeP = resumeP;
        this.commentsP = commentsP;
        this.noteP = noteP;
    }

    get getTitre() {
        return this.titre;
    }

    get getUrl() {
        return this.url;
    }

    get getResume() {
        return this.resumeP;
    }

    get getComments() {
        return this.commentsP;
    }

    get getNote() {
        return this.titre;
    }
}