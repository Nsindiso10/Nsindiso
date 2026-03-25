import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-certification',
  imports: [CommonModule],
  templateUrl: './certification.html',
  styleUrl: './certification.css',
})
export class Certification {

certificates = [
  { title: 'IT Essentials', image: '/Nsindiso/assets/images/IT-Essential.jpeg' },
  { title: 'Introduction to Networks', image: '/Nsindiso/assets/images/Introduction-to-Network.jpeg' },
  { title: 'Data Science 101', image: '/Nsindiso/assets/images/Data-Science.jpeg' },
  { title: 'Badges', image: '/Nsindiso/assets/images/CCNAv_vs_AWS.jpeg' },
  { title: 'AWS Badges', image: '/Nsindiso/assets/images/AWS-badges.jpeg' },
  { title: 'AWS Educate', image: '/Nsindiso/assets/images/AWS-Educate.jpeg' }
];

  startIndex = 0;
  intervalId!: number;

  selectedCertificate: any = null;

get visibleCertificates() {
  const visible = [];

  for (let i = 0; i < 3; i++) {
    const index = (this.startIndex + i) % this.certificates.length;
    visible.push(this.certificates[index]);
  }

  return visible;
}
  next() {
  this.startIndex = (this.startIndex + 1) % this.certificates.length;
}

 prev() {
  this.startIndex =
    (this.startIndex - 1 + this.certificates.length) %
    this.certificates.length;
}
 openCertificate(cert: any) {
  this.selectedCertificate = cert;
  document.body.classList.add('modal-open');
}

closeCertificate() {
  this.selectedCertificate = null;
  document.body.classList.remove('modal-open');
}
  ngOnInit() {
  this.intervalId = window.setInterval(() => {
    this.next();
  }, 3000);
}

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

}
