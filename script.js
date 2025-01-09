// 모든 갤러리 이미지를 선택
const images = document.querySelectorAll('.gallery-img');

// 이벤트 리스너 추가
images.forEach((image) => {
    image.addEventListener('click', () => {
        // 확대된 이미지가 이미 있으면 제거
        const existingExpandedImage = document.querySelector('.expanded-image');
        const existingBackground = document.querySelector('.expanded-image-background');
        
        if (existingExpandedImage) {
            existingExpandedImage.remove();
            existingBackground.remove();
        } else {
            // 새로 확대된 이미지를 화면에 추가
            const expandedImage = document.createElement('img');
            expandedImage.src = image.src; // 클릭된 이미지의 src를 사용
            expandedImage.classList.add('expanded-image');
            
            // 배경을 어두운 색으로 처리
            const background = document.createElement('div');
            background.classList.add('expanded-image-background');
            
            // 이미지와 배경을 body에 추가
            document.body.appendChild(expandedImage);
            document.body.appendChild(background);
            
            // 배경 또는 확대된 이미지를 클릭 시 원래 상태로 돌아가기
            expandedImage.addEventListener('click', () => {
                expandedImage.remove();
                background.remove();
            });
            
            background.addEventListener('click', () => {
                expandedImage.remove();
                background.remove();
            });
        }
    });
});
